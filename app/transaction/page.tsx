import { transactionData } from '@/api'
import MainLayout from '@/components/main-layout/MainLayout'
import Link from 'next/link'
import React from 'react'

const TransactionHistory = () => {
  return (
    <MainLayout>
    <div>
        <div className="overflow-x-auto">
          <table className="w-[100%] text-[10px] md:text-[12px] bg-white-100 text-left min-w-full divide-y">
            <thead className="bg-white-100 text-gray-450 py-4 font-light">
              <tr className="border-b border-gray-200 overflow-x-auto">
                <th className="py-4 px-2 text-gray-350 tracking-wider">Name</th>
                <th className="py-4 px-2 text-gray-350 tracking-wider">
                  Amount
                </th>
                <th className="py-4 px-2 text-gray-350 tracking-wider">
                  Date
                </th>
                <th className="py-4 px-2 text-gray-350 tracking-wider">
                  Status
                </th>
                <th className="py-4 px-2 text-gray-350 tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="min-w-full divide-y">
              {transactionData.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-200 hover:bg-gray-200 cursor-pointer overflow-x-auto"
                >
                  <td className="py-4 px-2 whitespace-nowrap">
                    {transaction.name}
                  </td>
                  <td className="py-4 px-2 whitespace-nowrap">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-2 whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-2 whitespace-nowrap">
                    {transaction.status}
                  </td>
                  <td className="flex items-center py-4 px-2">
                    <Link href="" className="flex items-center ml-auto text-red-305">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   </MainLayout>
  )
}

export default TransactionHistory