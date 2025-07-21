import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'
import { defaultCategories } from '@/data/categories';
import AddTransactionForm from './_components/transaction-form.jsx';

const AddTranscationPage = async () => {
    const accounts = await getUserAccounts();
  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="gradient-title text-5xl mb-8">Add Transaction</h1>
      <AddTransactionForm accounts={accounts} categories={defaultCategories}/>
    </div>
  )
}

export default AddTranscationPage
