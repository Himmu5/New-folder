import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-center sm:justify-start bg-gray-700 text-white">
      <div className="flex flex-col space-y-3 p-5 sm:space-y-0 sm:flex-row sm:justify-between sm:w-full sm:p-8 md:pl-20 md:pr-20">
        <p>Copyright &copy; 2022 | TryCasuals</p>
        <p>Powered By TryCasuals</p>
      </div>
    </div>
  )
}
