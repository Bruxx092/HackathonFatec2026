import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Platform } from "react-native";

export type FiltroDaltonismo =
  | "padrao"
  | "acromatomia"
  | "acromatopsia"
  | "deuteranomalia"
  | "deuteranopia"
  | "protanomalia"
  | "protanopia"
  | "tritanomalia"
  | "tritanopia";

export type EscalaTexto = "normal" | "grande" | "enorme";

interface OpcaoFiltro {
  valor: FiltroDaltonismo;
  rotulo: string;
  matriz?: string;
}

export const filtrosDaltonismo: OpcaoFiltro[] = [
  { valor: "padrao", rotulo: "Cores Padrão" },
  {
    valor: "acromatomia",
    rotulo: "Acromatomia",
    matriz: "0.618 0.320 0.062 0 0 0.163 0.775 0.062 0 0 0.163 0.320 0.516 0 0 0 0 0 1 0",
  },
  {
    valor: "acromatopsia",
    rotulo: "Acromatopsia",
    matriz: "0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0",
  },
  {
    valor: "deuteranomalia",
    rotulo: "Deuteranomalia",
    matriz: "0.800 0.200 0 0 0 0.258 0.742 0 0 0 0 0.142 0.858 0 0 0 0 0 1 0",
  },
  {
    valor: "deuteranopia",
    rotulo: "Deuteranopia",
    matriz: "0.625 0.375 0 0 0 0.700 0.300 0 0 0 0 0.300 0.700 0 0 0 0 0 1 0",
  },
  {
    valor: "protanomalia",
    rotulo: "Protanomalia",
    matriz: "0.817 0.183 0 0 0 0.333 0.667 0 0 0 0 0.125 0.875 0 0 0 0 0 1 0",
  },
  {
    valor: "protanopia",
    rotulo: "Protanopia",
    matriz: "0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0",
  },
  {
    valor: "tritanomalia",
    rotulo: "Tritanomalia",
    matriz: "0.967 0.033 0 0 0 0 0.733 0.267 0 0 0 0.183 0.817 0 0 0 0 0 1 0",
  },
  {
    valor: "tritanopia",
    rotulo: "Tritanopia",
    matriz: "0.950 0.050 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0",
  },
];

export const escalasTexto: { valor: EscalaTexto; rotulo: string; zoom: number }[] = [
  { valor: "normal", rotulo: "Normal", zoom: 1 },
  { valor: "grande", rotulo: "Grande", zoom: 1.15 },
  { valor: "enorme", rotulo: "Enorme", zoom: 1.3 },
];

const CHAVE_FILTRO = "fatecon:filtroDaltonismo";
const CHAVE_TEXTO = "fatecon:escalaTexto";
const ID_SVG = "fatecon-filtros-daltonismo";
const NS_SVG = "http://www.w3.org/2000/svg";

function garantirSvgFiltros(): void {
  if (typeof document === "undefined" || document.getElementById(ID_SVG)) {
    return;
  }
  const svg = document.createElementNS(NS_SVG, "svg");
  svg.setAttribute("id", ID_SVG);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("style", "position:absolute;width:0;height:0");
  for (const filtro of filtrosDaltonismo) {
    if (!filtro.matriz) {
      continue;
    }
    const definicao = document.createElementNS(NS_SVG, "filter");
    definicao.setAttribute("id", `fatecon-${filtro.valor}`);
    definicao.setAttribute("color-interpolation-filters", "linearRGB");
    const matriz = document.createElementNS(NS_SVG, "feColorMatrix");
    matriz.setAttribute("type", "matrix");
    matriz.setAttribute("values", filtro.matriz);
    definicao.appendChild(matriz);
    svg.appendChild(definicao);
  }
  document.body.appendChild(svg);
}

function aplicarNoWeb(filtro: FiltroDaltonismo, escala: EscalaTexto): void {
  if (Platform.OS !== "web" || typeof document === "undefined") {
    return;
  }
  const raiz = document.documentElement;
  const opcao = filtrosDaltonismo.find((item) => item.valor === filtro);
  if (!opcao?.matriz) {
    raiz.style.filter = "";
  } else {
    garantirSvgFiltros();
    raiz.style.filter = `url(#fatecon-${filtro})`;
  }
  const escalaTextoEscolhida = escalasTexto.find((item) => item.valor === escala);
  raiz.style.zoom = String(escalaTextoEscolhida?.zoom ?? 1);
}

interface ContextoAcessibilidade {
  filtro: FiltroDaltonismo;
  escalaTexto: EscalaTexto;
  definirFiltro: (valor: FiltroDaltonismo) => void;
  definirEscalaTexto: (valor: EscalaTexto) => void;
}

const AcessibilidadeContext = createContext<ContextoAcessibilidade | undefined>(undefined);

export function AcessibilidadeProvider({ children }: { children: ReactNode }) {
  const [filtro, setFiltro] = useState<FiltroDaltonismo>("padrao");
  const [escalaTexto, setEscalaTexto] = useState<EscalaTexto>("normal");

  useEffect(() => {
    AsyncStorage.multiGet([CHAVE_FILTRO, CHAVE_TEXTO]).then((entradas) => {
      const salvoFiltro = entradas[0][1];
      const salvoTexto = entradas[1][1];
      if (salvoFiltro) {
        setFiltro(salvoFiltro as FiltroDaltonismo);
      }
      if (salvoTexto) {
        setEscalaTexto(salvoTexto as EscalaTexto);
      }
    });
  }, []);

  useEffect(() => {
    aplicarNoWeb(filtro, escalaTexto);
  }, [filtro, escalaTexto]);

  function definirFiltro(valor: FiltroDaltonismo) {
    setFiltro(valor);
    AsyncStorage.setItem(CHAVE_FILTRO, valor);
  }

  function definirEscalaTexto(valor: EscalaTexto) {
    setEscalaTexto(valor);
    AsyncStorage.setItem(CHAVE_TEXTO, valor);
  }

  const valor = useMemo(
    () => ({ filtro, escalaTexto, definirFiltro, definirEscalaTexto }),
    [filtro, escalaTexto],
  );

  return <AcessibilidadeContext.Provider value={valor}>{children}</AcessibilidadeContext.Provider>;
}

export function useAcessibilidade(): ContextoAcessibilidade {
  const contexto = useContext(AcessibilidadeContext);
  if (!contexto) {
    throw new Error("useAcessibilidade deve ser usado dentro de AcessibilidadeProvider");
  }
  return contexto;
}
