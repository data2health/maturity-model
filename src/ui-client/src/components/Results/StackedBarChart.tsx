import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState } from '../../model/UserState';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface Props {
    user: UserState;
    models: BaseModel[];
}

interface StackedBarDataPoint {
    all: number;
    max: number;
    model: string;
    user: number;
}

export default class StackedBarChart extends React.PureComponent<Props> {
    private className = 'results-stacked-bar';
    private blue = "rgb(28,168,221)";
    private orange = "rgb(255,132,8)";

    public render() {
        const { user } = this.props;
        const c = this.className;
        const data = this.getStackedBarData();

        return (
            <div className={c}>
                <BarChart width={500} height={300} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="model" />
                    <YAxis />
                    <Tooltip />
                    <Bar name={'Your Score'} stackId="a" dataKey="user" stroke={this.orange} fill={this.orange} fillOpacity={0.5} />
                    <Bar name={`Average (n=${user.results.n})`} stackId="a" dataKey="all" stroke={this.blue} fill={this.blue} fillOpacity={0.3} />
                    <Legend />
                </BarChart>
            </div>
        );
    }

    private getStackedBarData = (): StackedBarDataPoint[] => {
        const { all, user} = this.props.user.results;
        const models = this.props.models.filter(m => m.selected);
        const data: StackedBarDataPoint[] = [];
;
        models.map(
            function (m) {
                switch (m.name) {
                    case 'Research Informatics and Open Science Maturity Model (RIOSM)': {
                        data.push({ model: 'RIOSM', all: all['riosm'], user: user['riosm'], max: 1.0 });
                        break;
                    };
                    case 'Precision Health Deployment/Adoption Model': {
                        data.push({ model: 'Precision Health', all: all['precision_health'], user: user['precision_health'], max: 1.0 });
                        break;
                    };
                    case 'Quintegra Maturity Model for Electronic Healthcare (eHMM)': {
                        data.push({ model: 'Quintegra eHmm', all: all['quintegra_ehmm'], user: user['quintegra_ehmm'], max: 1.0 });
                        break;
                    };
                };
            }
        )

        return data;
    }
}