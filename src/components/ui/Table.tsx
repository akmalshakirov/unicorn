import { LogIn, SquarePen, Trash } from "lucide-react";
import type { TableProps } from "../../types";

const Table = ({ data, columns, actions }: TableProps) => {
    return (
        <div className='bg-secondary w-full rounded-3xl p-4 overflow-x-auto max-w-full'>
            <table className='w-full'>
                <thead>
                    <tr>
                        {columns.map((col, i) => (
                            <th
                                key={col.key ?? i}
                                scope='col'
                                className='text-nowrap'>
                                {col.header}
                            </th>
                        ))}
                        {actions && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={item.id ?? rowIndex}>
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className='px-4 py-3 text-center text-sm text-gray-100 text-nowrap'>
                                    {item[col.key]}
                                </td>
                            ))}
                            {actions && (
                                <td className='text-center space-x-3 text-nowrap'>
                                    {actions.info && (
                                        <button className='*:stroke-stroke cursor-pointer'>
                                            <LogIn size={20} />
                                        </button>
                                    )}
                                    {actions.update && (
                                        <button className='*:stroke-stroke cursor-pointer'>
                                            <SquarePen size={20} />
                                        </button>
                                    )}
                                    {actions.delete && (
                                        <button className='*:stroke-stroke cursor-pointer'>
                                            <Trash size={20} />
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
