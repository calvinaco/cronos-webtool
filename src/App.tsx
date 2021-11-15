import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from '@rehooks/local-storage';
import Layout from './Layout';
import Transaction from './Transaction';
import './App.css';
import CronosService from './service/cronos';
import { DEFAULT_SETTINGS, Settings } from './settings';
import Accounts from './Accounts';

export default function App() {
  const [settings, setSettings] = useLocalStorage<Settings>('settings');

  if (!settings) {
    setSettings(DEFAULT_SETTINGS);
    return <React.Fragment />;
  }

  const cronosService = new CronosService('https://evm-cronos.crypto.org');

  const addAccountToWishList = (account: string) => {
    if (!cronosService.isValidAddress(account)) {
      throw new Error('invalid address');
    }
    if (settings.accounts.indexOf(account) !== -1) {
      throw new Error('account already added');
    }
    setSettings({
      ...settings,
      accounts: [...settings!.accounts, account],
    })
  }

  const removeAccountFromWishList = (account: string) => {
    setSettings({
      ...settings,
      accounts: settings!.accounts.filter((value) => value !== account),
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="accounts" element={<Accounts
            cronosService={cronosService}
            onAddAccountToWatchList={addAccountToWishList}
            onRemoveAccountFromWishList={removeAccountFromWishList}
            accounts={settings.accounts}
            tokens={settings.tokens}
          />} />
          <Route path="transaction" element={<Transaction cronosService={cronosService} />} />
          {/* <Route path="settings" element={<Transaction cronosService={cronosService} />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
