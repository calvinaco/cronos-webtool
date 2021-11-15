export type Settings = {
  version: 1;
  accounts: string[];
  tokens: Token[];
};

export type Token = TokenV1;

export type TokenV1 = {
  name: string;
  symbol: string;
  contractAddress: string;
  decimalPlaces: number;
};

export const CRO: Token = {
  name: "CRO",
  symbol: "CRO",
  contractAddress: "",
  decimalPlaces: 18,
};

export const DEFAULT_SETTINGS: Settings = {
  version: 1,
  accounts: [],
  tokens: [
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      contractAddress: "0xf2001b145b43032aaf5ee2884e456ccd805f677d",
      decimalPlaces: 18,
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      contractAddress: "0x66e428c3f67a68878562e79A0234c1F83c208770",
      decimalPlaces: 6,
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      contractAddress: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
      decimalPlaces: 6,
    },
    {
      name: "VVSToken",
      symbol: "VVS",
      contractAddress: "0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",
      decimalPlaces: 18,
    },
    {
      name: "Wrapped BTC",
      symbol: "WBTC",
      contractAddress: "0x062E66477Faf219F25D27dCED647BF57C3107d52",
      decimalPlaces: 8,
    },
    {
      name: "Wrapped ETH",
      symbol: "WETH",
      contractAddress: "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
      decimalPlaces: 18,
    },
    {
      name: "Shiba",
      symbol: "SHIB",
      contractAddress: "0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",
      decimalPlaces: 18,
    },
    {
      name: "Doge",
      symbol: "DOGE",
      contractAddress: "0x1a8E39ae59e5556B56b76fCBA98d22c9ae557396",
      decimalPlaces: 8,
    },
  ],
};
