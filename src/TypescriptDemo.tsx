import * as React from "react";
import {useRef, useState} from "react";

type AppProps = {message: string};


const TypescriptDemo:React.FunctionComponent<AppProps>= ({message}):JSX.Element => {
  const [val,setVal] = useState<HTMLElement>(null!);
  return (<div>
    {message}
  </div>);
};

export default TypescriptDemo;

const initialState = {count: 0};
type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function area(s:ACTIONTYPE) {
  if (s.type === "increment"){
    s.payload = 18;
  } else {
    s.payload = "18";
  }
}

const [count,setCount] = useState(null!);
const [a,setA] = useState<HTMLElement | null>(null);

const arr:React.FC = () => (Array(5).fill(<div/>) as unknown) as JSX.Element;

const MyCondit = ({should = false}) => should ? <div/> : null;

const el2 = <MyCondit/>;

export function useLoading() {
  const [isLoading,setState] = React.useState<boolean>(false);
  const load = (aPromise:Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false))
  };

  return tuplify(isLoading,load);
}

function tuplify<T extends any[]>(...elements: T) {
  return elements;
}


function useArray() {
  const numberValue = useRef(3).current;
  const functionValue = useRef(() => {}).current;
  return [numberValue, functionValue]; // type is (number | (() => void))[]
}

function useTuple() {
  const numberValue = useRef(3).current;
  const functionValue = useRef(() => {}).current;
  return tuplify(numberValue, functionValue); // type is [number, () => void]
}

const [num] = useTuple();

const [isLoading,load] = useLoading();

type GreetProps = {age: number} & typeof defaultProps;
const defaultProps = {
  age: 21
};

const Greet = (props: GreetProps) => {
  props.age = "18"
};
Greet.defaultProps = defaultProps;

