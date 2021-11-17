import React from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import { useLocalStorage } from '@rehooks/local-storage';
import Layout from './Layout';
import Transaction from './Transaction';
import './App.css';
import CronosService from './service/cronos';
import { DEFAULT_SETTINGS, Settings as SettingsType, Token } from './settings';
import Accounts from './Accounts';
import Settings from './Settings/Settings';

export default function App() {
  const [settings, setSettings] = useLocalStorage<SettingsType>('settings');

  if (!settings) {
    setSettings(DEFAULT_SETTINGS);
    return <React.Fragment />;
  }

  const cronosService = new CronosService('https://cronos.crypto.org');

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

  const addTokenToSettings = (value: Token) => {
    if (!cronosService.isValidAddress(value.contractAddress)) {
      throw new Error('invalid contract address');
    }
    if (!!settings.tokens.find(token => token.contractAddress === value.contractAddress)) {
      throw new Error('token already added');
    }
    setSettings({
      ...settings,
      tokens: [...settings!.tokens, value]
    })
  }

  const removeTokenAtIndexFromSettings = (index: number) => {
    setSettings({
      ...settings,
      tokens: settings!.tokens.filter((_, i) => i !== index),
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
          <Route path="settings" element={<Settings
            settings={settings}
            onAddTokenToSettings={addTokenToSettings}
            onRemoveTokenFromSettings={removeTokenAtIndexFromSettings}
          />} />
          <Route index element={<Navigate to="accounts" />} / >
        </Route>
      </Routes>
    </div>
  );
}
