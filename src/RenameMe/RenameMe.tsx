
import * as React from 'react';
import {ViewComponent, IViewComponentProps, IViewComponentState, IUsable} from '@nbsolutions/view-component';
import styles from './RenameMe.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRenameMeProps extends IViewComponentProps {

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRenameMeState extends IViewComponentState {

}

export class RenameMe extends ViewComponent<IRenameMeProps, IRenameMeState> {
    
    public constructor(props: IRenameMeProps) {
        super(props);
    }

    protected _getInitialState(props: IRenameMeProps): IRenameMeState {
        return {};
    }

    protected _getUsableStyles(): IUsable {
        return styles;
    }

    public render(): JSX.Element {
        return (
            <div className={this.getClassName()}>
                {/* Render me */}
            </div>
        );
    }
}
