<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue'
import { QSkeleton } from '@components/base/skeleton'
import { useAntdToken } from '@composables/use-antd-token'
import { useRequest } from '@composables/use-request/use-request'
import AttendanceService from '@modules/attendance/services/attendance.service'
import type { CompanyVO } from '@modules/attendance/types'
import { convertDistance } from '@utils/convert/distance'
import { generateMenuItem } from '@utils/generate-menu-item'
import type { MenuProps, SliderProps } from 'ant-design-vue'
import { Button, Drawer, Flex, Menu, Slider, TypographyText, message } from 'ant-design-vue'
import { computed, defineAsyncComponent, onMounted, reactive, ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'

const ScopedMap = defineAsyncComponent(() => import('./map.vue'))

const drawerStatus = defineModel<boolean>('open', { required: false })

const closeDrawer = () => {
  drawerStatus.value = false
}

// const covertCompanyListToMenuList = computed<MenuProps['items']>(() => (list: CompanyVO[]) => (
//   // list.map(item => gen)
// ))

const formatSliderTip: SliderProps['tipFormatter'] = (value = 0) =>
  t('attendance.drawer.radiusTip', { distance: convertDistance(value) })

const companyMenuItems = shallowRef<MenuProps['items']>()

const convertCompanyListToMenuItems = (list: CompanyVO[]): MenuProps['items'] =>
  list.map((item) => generateMenuItem(item.id.toString(), item.name))

const companyList = shallowRef<CompanyVO[]>([])

const selectedCompany = reactive<CompanyVO>({
  address: '',
  id: 0,
  phone: '',
  name: '',
  point: [],
  radius: 0,
})

const { run: getCompanyList, loading: getCompanyListLoading } = useRequest(
  AttendanceService.getCompanyList,
  {
    manual: true,
    onSuccess: ({ data }) => {
      companyList.value = data
      // 转换为 menu items
      companyMenuItems.value = convertCompanyListToMenuItems(data)
      Object.assign(selectedCompany, data[0])
    },
  },
)

const selectedCompanyIds = ref<string[]>()

// 根据id获取company
const getCompanyById = (id: number | string) => {
  return companyList.value.filter((item) => item.id === Number(id))[0]
}

// 保存当前修改后的company到company list
const saveCompanyToCompanyList = (source: CompanyVO, targetCompanyId: number | string) => {
  const target = getCompanyById(targetCompanyId)
  Object.assign(target, source)
}
// 选择company
const handleSelectedCompany: MenuProps['onClick'] = (info) => {
  Object.assign(selectedCompany, getCompanyById(info.key))
}

// 滑动结束之后 将当前company 复制到company 对应的数据上去
const handleSliderAfterChange: SliderProps['onAfterChange'] = (value) => {
  saveCompanyToCompanyList(selectedCompany, selectedCompany.id)
}

// 将后端返回的数据转换为 map可接受的数据
const convertScopedCenter = computed(() => ({
  lat: selectedCompany.point[1],
  lng: selectedCompany.point[0],
}))
const { run: updateCompanyList, loading: updateCompanyListLoading } = useRequest(
  AttendanceService.updateCompanyList,
  {
    manual: true,
    onSuccess: () => {
      message.success(t('attendance.drawer.messages.updateSuccess'))
      closeDrawer()
    },
    onError: ({ message }) => {
      message.error(message || t('attendance.drawer.messages.updateError'))
    },
  },
)

const handleBatchSaveCompanyPoint = () => {
  updateCompanyList({ list: companyList.value })
}

onMounted(async () => {
  await getCompanyList()
})

const { token } = useAntdToken()

const { t } = useI18n()
</script>

<template>
  <Drawer
    height="100vh"
    @close="closeDrawer"
    :title="t('attendance.drawer.title')"
    :open="drawerStatus"
    placement="top"
    :closable="false"
  >
    <template #extra>
      <CloseOutlined @click="closeDrawer" :style="{ color: token.colorText }" />
    </template>
    <template #default>
      <Flex class="h-full" gap="middle">
        <div class="flex-1 h-full">
          <ScopedMap :scoped-radius="selectedCompany.radius" :scoped-center="convertScopedCenter" />
        </div>
        <Flex class="attendance-scope-right" vertical gap="middle">
          <QSkeleton
            :loading="getCompanyListLoading"
            active
            :title="false"
            :paragraph="{
              rows: 8,
            }"
          >
            <div class="attendance-scope-company-list flex-1">
              <Menu
                class="attendance-scope-company-list-inner"
                v-model:selectedKeys="selectedCompanyIds"
                :items="companyMenuItems"
                @click="handleSelectedCompany"
              />
            </div>
          </QSkeleton>
          <div>
            <TypographyText type="secondary">{{ t('attendance.drawer.radius') }}</TypographyText>
            <Slider
              @afterChange="handleSliderAfterChange"
              :max="1000"
              v-model:value="selectedCompany.radius"
              :tip-formatter="formatSliderTip"
            />
          </div>
        </Flex>
      </Flex>
    </template>
    <template #footer>
      <Flex justify="end" gap="middle">
        <Button @click="closeDrawer">{{ t('attendance.drawer.buttons.cancel') }}</Button>
        <Button
          type="primary"
          @click="handleBatchSaveCompanyPoint"
          :loading="updateCompanyListLoading"
          >{{ t('attendance.drawer.buttons.batchSave') }}</Button
        >
      </Flex>
    </template>
  </Drawer>
</template>

<style scoped lang="less">
.attendance-scope {
  &-company-list {
    height: 100%;
    overflow-y: scroll;

    &-inner {
      border-radius: v-bind('`${token.borderRadiusLG}px`');
    }
  }

  &-right {
    height: 100%;
    min-width: 300px;

    :deep(.table-striped) td {
      background-color: v-bind('token.colorBgContainer');
    }
  }
}
</style>
