/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual.granularity {
    // datePeriod
    import TimelineDatePeriod = datePeriod.TimelineDatePeriod;
    import Selection = d3.Selection;

    export interface Granularity {
        getType?(): GranularityType;
        splitDate(date: Date): (string | number)[];
        getDatePeriods(): TimelineDatePeriod[];
        resetDatePeriods(): void;
        getExtendedLabel(): ExtendedLabel;
        setExtendedLabel(extendedLabel: ExtendedLabel): void;
        createLabels(granularity: Granularity): TimelineLabel[];
        sameLabel?(firstDatePeriod: TimelineDatePeriod, secondDatePeriod: TimelineDatePeriod): boolean;
        generateLabel?(datePeriod: TimelineDatePeriod): TimelineLabel;
        addDate(date: Date);
        setNewEndDate(date: Date): void;
        splitPeriod(index: number, newFraction: number, newDate: Date): void;
        splitDateForTitle(date: Date): (string | number)[];
        render(
            props: GranularityRenderProps,
            isFirst: boolean
        ): Selection<any>;
    }
}
