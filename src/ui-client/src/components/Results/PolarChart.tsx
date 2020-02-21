import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState } from '../../model/UserState';
import { RIOSM } from '../../model/Models/RIOSM'
import { PrecisionHealth } from '../../model/Models/PrecisionHealth'
import { Quintegra_eHMM } from '../../model/Models/Quintegra_eHMM'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

interface Props {
    user: UserState;
    models: BaseModel[];
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
        const data = this.getPolarData();

        return (
            <div className={c}>
                <RadarChart outerRadius={250} width={1000} height={600} data={data}>
                    <PolarGrid stroke={'rgb(230,230,230)'} />
                    <PolarAngleAxis dataKey="model" />
                    <PolarRadiusAxis angle={90} domain={[0, 1]} />
                    <Radar name={'Your Score'} dataKey="user" stroke={this.orange} fill={this.orange} fillOpacity={0.5} />
                    <Radar name={`Average (n=${user.results.n})`} dataKey="all" stroke={this.blue} fill={this.blue} fillOpacity={0.3} />
                    <Legend align={'left'} />
                    <Tooltip formatter={(value) => (Number(value)*100).toFixed(1).toString() + '%'} />
                </RadarChart>
            </div>
        );
    }

    private getPolarData = (): PolarDataPoint[] => {
        const { all, user } = this.props.user.results;
        const models = this.props.models.filter(m => m.selected);
        const data: PolarDataPoint[] = [];

        models.map(
            function (m) {
                switch (m.name) {
                    case RIOSM.name: {
                        data.push({ model: 'RIOSM', all: all['riosm'], user: user['riosm'], max: 1.0 });
                        break;
                    };
                    case PrecisionHealth.name: {
                        data.push({ model: 'Precision Health', all: all['precision_health'], user: user['precision_health'], max: 1.0 });
                        break;
                    };
                    case Quintegra_eHMM.name: {
                        data.push({ model: 'Quintegra eHmm', all: all['quintegra_ehmm'], user: user['quintegra_ehmm'], max: 1.0 });
                        break;
                    };
                };
            }
        )

        // data.push({ model: 'IDC Healthcare IT', all: all['idc_healthcare_it'], user: user['idc_healthcare_it'], max: 1.0 });
        // data.push({ model: 'HIMSS Electronic Medical Record', all: all['himss_emram'], user: user['himss_emram'], max: 1.0 });
        // data.push({ model: 'HIMSS Continuity of Care', all: all['himss_ccmm'], user: user['himss_ccmm'], max: 1.0 });
        // data.push({ model: 'NEHTA Interoperability', all: all['nehta_imm'], user: user['nehta_imm'], max: 1.0 });

        return data;
    }
}