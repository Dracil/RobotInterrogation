import * as React from 'react';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';

interface IProps {
    role: ISuspectRole;
}

export class InterviewerViolentKilled extends React.PureComponent<IProps> {
    public render() {
        return <div>
            <h2>You are the interviewer.</h2>
            <p>The suspect was a violent robot who completed their obsession and killed you.</p>
            <p>You lose.</p>

            <SuspectRole role={this.props.role} />
        </div>
    }
}