import {IndexValue} from '../../../types/IndexValue';
import {SortSetup} from '../../../types/SortSetup';
import {RowsPerPage} from '../../../enums/RowsPerPage';

export type TableState = {
	selectedYear: number
	currentPage: number
	rowsPerPage: RowsPerPage
	sortSetup: SortSetup<IndexValue>
}