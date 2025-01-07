import type { BarSeriesOption, ComposeOption, DatasetComponentOption, GridComponentOption, LineSeriesOption, TitleComponentOption, TooltipComponentOption } from "echarts";
import { BarChart, LineChart, PieChart, RadarChart } from "echarts/charts";
import { DatasetComponent, GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent, TransformComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 使用ComposeOption来定义EChartOption，可以灵活地组合不同的ECharts组件选项
export type ECOption = ComposeOption<
  | BarSeriesOption
  | DatasetComponentOption
  | GridComponentOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
>


// 注册必须得组件
echarts.use([
  TitleComponent,
  PieChart,
  RadarChart,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
])

export default echarts;
