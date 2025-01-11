import { useAntdToken } from '@/shared/composables/use-antd-token'
import { Button, Result } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const ResultTitle = defineComponent({
  name: 'ResultTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const { t } = useI18n()

    const { token } = useAntdToken()

    return () => <div style={{ color: props.color }}>{props.title}</div>
  },
})

const ResultSubTitle = defineComponent({
  name: 'ResultSubTitle',
  props: {
    subTitle: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    return () => <div style={{ color: props.color }}>{props.subTitle}</div>
  },
})

const Result404 = defineComponent({
  name: 'Result404',
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const { token } = useAntdToken()

    return () => (
      <Result
        status="404"
        title={<ResultTitle title={t('result.404.title')} color={token.value.colorText} />}
        subTitle={
          <ResultSubTitle
            subTitle={t('result.404.subTitle')}
            color={token.value.colorTextSecondary}
          />
        }
      >
        {{
          extra: () => (
            <Button type="primary" onClick={() => router.push('/dashboard')}>
              {t('result.404.extra')}
            </Button>
          ),
        }}
      </Result>
    )
  },
})

export { Result404 }
