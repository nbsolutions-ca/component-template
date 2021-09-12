
import * as React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {configure} from '@testing-library/dom';

configure({
    testIdAttribute: 'class'
});

describe('RenameMe', () => {
    it('xxx', () => {
        let renderResult: RenderResult = render(
            <div className="test">
                test
            </div>
        );

        let node: HTMLElement = renderResult.getByTestId('RenameMe');
        expect(node).toBeTruthy();
    });
});
