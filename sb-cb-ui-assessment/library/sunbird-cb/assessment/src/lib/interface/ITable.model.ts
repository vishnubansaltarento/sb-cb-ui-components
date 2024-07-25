import { IColums, IAction } from './interfaces'
export interface ITableData {
  columns: IColums[],
  actions: IAction[],
  needHash: boolean,
  needCheckBox: boolean,
  sortState?: string,
  sortColumn?: string
  needUserMenus: boolean
}
