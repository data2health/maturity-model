import React from 'react'
import { UserState } from '../../model/UserState';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

interface Props {
    user: UserState;
}

interface PolarDataPoint {
    all: number;
    max: number;
    model: string;
    user: number;
}

export default class PolarChart extends React.PureComponent<Props> {
    private className = 'results-polar';
    private blue = "rgb(28,168,221)";
    private orange = "rgb(255,132,8)";

    public render() {
        const { user } = this.props;
        const c = this.className;

        return (
            <div className={c}>
                <RadarChart outerRadius={250} width={1000} height={600} data={this.getPolarData()}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="model" />
                    <PolarRadiusAxis angle={30} domain={[0, 1]} />
                    <Radar name={'Your Score'} dataKey="user" stroke={this.orange} fill={this.orange} fillOpacity={0.6} />
                    <Radar name={`Average (n=${user.results.n})`} dataKey="all" stroke={this.blue} fill={this.blue} fillOpacity={0.4} />
                    <Legend align={'left'} />
                </RadarChart>
            </div>
        );
    }

    private getPolarData = (): PolarDataPoint[] => {
        const { all, user } = this.props.user.results;
        const data: PolarDataPoint[] = [];

        data.push({ model: 'RIOSM', all: all['riosm'], user: user['riosm'], max: 1.0 });
        data.push({ model: 'Precision Health', all: all['precision_health'], user: user['precision_health'], max: 1.0 });
        data.push({ model: 'Quintegra eHmm', all: all['quintegra_ehmm'], user: user['quintegra_ehmm'], max: 1.0 });
        data.push({ model: 'IDC Healthcare IT', all: all['idc_healthcare_it'], user: user['idc_healthcare_it'], max: 1.0 });
        data.push({ model: 'HIMSS Electronic Medical Record', all: all['himss_emram'], user: user['himss_emram'], max: 1.0 });
        data.push({ model: 'HIMSS Continuity of Care', all: all['himss_ccmm'], user: user['himss_ccmm'], max: 1.0 });
        data.push({ model: 'NEHTA Interoperability', all: all['nehta_imm'], user: user['nehta_imm'], max: 1.0 });

        return data;
    }
}