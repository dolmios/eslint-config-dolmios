// test.tsx - TypeScript test file for type-aware rules

// Import sorting tests (perfectionist/sort-imports)
// External imports - type imports first, then value imports
import type { ChangeEvent, JSX } from "react";
import React, { createContext, useContext } from "react";

// Side-effect imports (should be last)
import "./test-styles.css";

// Type-aware rule tests

// @typescript-eslint/no-floating-promises - unhandled promise
async function fetchData(): Promise<string> {
  return "data";
}
fetchData(); // Error: floating promise

// @typescript-eslint/await-thenable - await non-promise
const notAPromise = 42;
await notAPromise; // Error: not thenable

// @typescript-eslint/no-misused-promises - promise in wrong context
function Component(): React.JSX.Element {
  const handleClick = async (): Promise<void> => {
    await fetchData();
  };
  return <button onClick={handleClick}>Click</button>; // Error: promise misuse
}

// @typescript-eslint/restrict-plus-operands - unsafe addition
const num: number = 1;
const str: string = "2";
const result = num + str; // Error: unsafe addition

// @typescript-eslint/restrict-template-expressions - unsafe template
const unsafe = { toString: () => "test" };
const template = `Value: ${unsafe}`; // Error: unsafe template expression

// @typescript-eslint/no-base-to-string - calling toString on non-string
class CustomClass {
  value = 123;
}
const custom = new CustomClass();
custom.toString(); // Error: no-base-to-string

// @typescript-eslint/switch-exhaustiveness-check - missing enum case
enum Status {
  Pending = "pending",
  Success = "success",
  Error = "error",
}
function handleStatus(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "waiting";
    case Status.Success:
      return "done";
    // Missing Error case - should error
  }
}

// @typescript-eslint/no-unsafe-argument - unsafe function argument
function safeFunction(value: string): void {
  console.log(value);
}
const unsafeValue: unknown = "test";
safeFunction(unsafeValue); // Error: unsafe argument

// @typescript-eslint/no-unsafe-assignment - unsafe assignment
const unsafeData: unknown = { name: "test" };
const typed: { name: string } = unsafeData; // Error: unsafe assignment

// @typescript-eslint/no-unsafe-call - unsafe function call
const unsafeFn: unknown = () => console.log("test");
unsafeFn(); // Error: unsafe call

// @typescript-eslint/no-unsafe-member-access - unsafe property access
const unsafeObj: unknown = { prop: "value" };
const value = unsafeObj.prop; // Error: unsafe member access

// @typescript-eslint/no-unsafe-return - unsafe return
function getValue(): string {
  const data: unknown = "test";
  return data; // Error: unsafe return
}

// @typescript-eslint/no-implied-eval - setTimeout with string
setTimeout("console.log('test')", 100); // Error: implied eval

// @typescript-eslint/no-confusing-void-expression - confusing void
function voidFunction(): void {
  console.log("test");
}
const voidResult = void voidFunction(); // Error: confusing void expression

// @typescript-eslint/no-meaningless-void-operator - meaningless void
const num = 42;
void num; // Error: meaningless void

// @typescript-eslint/no-unnecessary-boolean-literal-compare
const isTrue = true;
if (isTrue === true) {
  // Error: unnecessary boolean literal compare
}

// @typescript-eslint/no-unnecessary-condition - always true/false
const alwaysTrue: true = true;
if (alwaysTrue) {
  // Error: unnecessary condition
}

// @typescript-eslint/no-unnecessary-type-assertion - unnecessary 'as'
const str = "hello";
const typedStr = str as string; // Error: unnecessary assertion

// @typescript-eslint/no-redundant-type-constituents - redundant union
type Redundant = string | "hello"; // Error: redundant type

// @typescript-eslint/prefer-includes - use includes instead of indexOf
const arr = [1, 2, 3];
if (arr.indexOf(2) !== -1) {
  // Error: prefer includes
}

// @typescript-eslint/prefer-nullish-coalescing - use ?? instead of ||
const value: string | null = null;
const result2 = value || "default"; // Error: prefer nullish coalescing

// @typescript-eslint/prefer-optional-chain - use ?. instead of &&
const obj = { nested: { value: "test" } };
const nested = obj && obj.nested && obj.nested.value; // Error: prefer optional chain

// @typescript-eslint/prefer-string-starts-ends-with - use startsWith/endsWith
const text = "hello world";
if (text.match(/^hello/)) {
  // Error: prefer startsWith
}

// @typescript-eslint/prefer-regexp-exec - use exec instead of match
const regex = /test/g;
const match = "test".match(regex); // Error: prefer regexp-exec

// React type-aware rules

// react/jsx-no-constructed-context-values - new object in context
const MyContext = createContext<{ value: string }>({ value: "" });

function Provider(): React.JSX.Element {
  return (
    <MyContext.Provider value={{ value: "test" }}>
      {/* Error: constructed context value */}
      <Child />
    </MyContext.Provider>
  );
}

function Child(): React.JSX.Element {
  const context = useContext(MyContext);
  return <div>{context.value}</div>;
}

// react/no-object-type-as-default-prop - object default prop
interface Props {
  config?: { key: string };
}
function ComponentWithDefault({ config = { key: "value" } }: Props): React.JSX.Element {
  // Error: object type as default prop
  return <div>{config.key}</div>;
}

// General bug-catching rules

// no-await-in-loop - await in loop
async function processItems(items: string[]): Promise<void> {
  for (const item of items) {
    await fetchData(); // Error: await in loop
  }
}

// no-promise-executor-return - return in promise executor
new Promise((resolve) => {
  return resolve("done"); // Error: executor return
});

// require-atomic-updates - race condition
let counter = 0;
async function increment(): Promise<void> {
  counter = counter + 1; // Error: atomic update needed
}

// no-implicit-coercion - implicit coercion
const someValue = "test";
const bool = !!someValue; // Error: implicit coercion
const num2 = +str; // Error: implicit coercion

// no-new-wrappers - new String/Number
const strWrapper = new String("test"); // Error: new wrapper
const numWrapper = new Number(42); // Error: new wrapper

// no-throw-literal - throw non-Error
throw "error"; // Error: throw literal
throw { message: "error" }; // Error: throw literal

// prefer-promise-reject-errors - reject with non-Error
Promise.reject("error"); // Error: reject with non-Error

// TypeScript-specific rules

// @typescript-eslint/no-empty-object-type - empty interface
interface Empty {} // Error: empty object type

// @typescript-eslint/no-for-in-array - for-in on array
const array = [1, 2, 3];
for (const index in array) {
  // Error: for-in on array
  console.log(array[index]);
}

// @typescript-eslint/explicit-function-return-type - missing return type
function noReturnType() {
  // Error: explicit return type required
  return "test";
}

// @typescript-eslint/no-explicit-any - explicit any
function withAny(value: any): void {
  // Error: explicit any
  console.log(value);
}

// @typescript-eslint/no-non-null-assertion - non-null assertion
const element = document.getElementById("test");
const text2 = element!.textContent; // Error: non-null assertion

// Export for testing
export { Component, Provider, ComponentWithDefault };
