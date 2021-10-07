import { ChartData } from '@popcorn/ui/src/interfaces/emissions-dashboard';
import { format } from 'date-fns';
import React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { getEmptyChartData } from '../../dummyEmissionsData';
import Spinner from '../../Spinner';

export interface ComposedBarChartProps {
  data?: ChartData[];
  height?: number;
  width?: number;
  topPadding?: number;
  areaColor?: string;
  barColor?: string;
  gridColor?: string;
  transactionsDataKey?: string;
  dateDataKey?: string;
  co2EmissionDataKey?: string;
}

export interface CustomTooltipProps extends TooltipProps<string, string> {
  transactionsColor: string;
  co2EmissionColor: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  transactionsColor,
  co2EmissionColor,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded p-2 shadow-lg">
        <p className="text-xs font-bold mb-2">{`${format(
          new Date(payload[0].payload.date),
          'dd/MM/yyyy hh:mm',
        )}`}</p>
        <ul className="m-0 p-0 space-y-2">
          <li className="flex gap-2 m-0 p-0">
            <div
              className={`w-4 h-4 border `}
              style={{ background: transactionsColor }}
            ></div>

            <div className="text-xs">{`Transaction: ${payload[0].payload.numTransactions.toLocaleString()}`}</div>
          </li>
          <li className="flex gap-2">
            <div
              className={`w-4 h-4 border `}
              style={{ background: co2EmissionColor }}
            ></div>
            <div className="text-xs">{`CO2 Emissions (${
              payload[0].payload.unit
            }): ${Math.round(payload[0].payload.co2Emissions)}`}</div>
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

const ChartContentWrapper: React.FC<
  React.PropsWithChildren<ComposedBarChartProps>
> = (props) => {
  return (
    <div
      className="w-full flex flex-wrap content-center border-2 border-gray-50 justify-center "
      style={{
        objectFit: 'cover',
        height: props.height,
        marginTop: 5,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 5,
      }}
    >
      {props.children}
    </div>
  );
};

export const ChartLoading: React.FC<ComposedBarChartProps> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <Spinner />
    </ChartContentWrapper>
  );
};

export const ChartError: React.FC<ComposedBarChartProps> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <p className="text-lg text-gray-500">Error loading transactions</p>
    </ChartContentWrapper>
  );
};

export const ChartEmpty: React.FC<ComposedBarChartProps> = ({ height }) => {
  return (
    <ChartContentWrapper height={height}>
      <p className="text-lg text-gray-500">No transactions were made</p>
    </ChartContentWrapper>
  );
};

const emptyData = getEmptyChartData();

export const ComposedBarChart: React.FC<ComposedBarChartProps> = ({
  data,
  height,
  topPadding = 10,
  areaColor = '#ddebfd',
  barColor = '#4884f4',
  gridColor = '#E0E0E0',
  transactionsDataKey = 'numTransactions',
  co2EmissionDataKey = 'co2Emissions',
}) => {
  const containsData =
    data?.reduce((pr, cu) => {
      return pr + cu.co2Emissions;
    }, 0) > 0;

  return containsData ? (
    <ResponsiveContainer
      className="justify-self-center"
      width="100%"
      height={height}
    >
      <ComposedChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <XAxis dataKey={transactionsDataKey} hide={true}></XAxis>

        <YAxis
          padding={{
            // top padding for the highest value in the chart
            top: topPadding,
          }}
          dataKey={transactionsDataKey}
          yAxisId="right-transactions"
          orientation="left"
          hide={true}
        />
        <YAxis
          dataKey={co2EmissionDataKey}
          yAxisId="right-emissions"
          orientation="left"
          hide={true}
        />

        <CartesianGrid stroke={gridColor} horizontalPoints={[5, height - 5]} />

        <Area
          type="monotone"
          dataKey={co2EmissionDataKey}
          yAxisId="right-emissions"
          stroke="transparent"
          fill={areaColor}
          activeDot={{ r: 0 }}
          x={10}
        />

        <Bar
          radius={[5, 5, 0, 0]}
          yAxisId="right-transactions"
          dataKey={transactionsDataKey}
          fill={barColor}
          maxBarSize={50}
        />
        <Area
          type="monotone"
          yAxisId="right-transactions"
          dataKey={transactionsDataKey}
          fill="transparent"
          stroke="transparent"
          activeDot={{ r: 6, fill: 'red', stroke: 'white', strokeWidth: 3 }}
        />

        <Tooltip
          cursor={{ stroke: 'red', strokeDasharray: 5 }}
          content={
            <CustomTooltip
              transactionsColor={barColor}
              co2EmissionColor={areaColor}
            />
          }
        />
      </ComposedChart>
    </ResponsiveContainer>
  ) : (
    <ChartEmpty height={height} />
  );
};
