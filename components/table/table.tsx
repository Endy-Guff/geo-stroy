import s from './table.module.scss'

export interface ITableColumns<T> {
    title: string
    property: keyof T
    render?: (data: T) => JSX.Element
    width?: number
    className?: string
}

interface ITableProps<T> {
    data: T[]
    columns: ITableColumns<T>[]
}

export const Table = <T, >({data, columns}: ITableProps<T>) => (
    <div className={s.tableContainer}>
        <table className={s.table}>
            <tbody>
            {
                data.map((data) =>
                    <tr className={s.row}>
                        {
                            columns.map(({title, property, render, width, className}) => (
                                <td className={className}>
                                    {render
                                        ? render(data)
                                        : data[property].toString()}
                                </td>
                            ))
                        }
                    </tr>
                )
            }
            </tbody>
        </table>
    </div>
)