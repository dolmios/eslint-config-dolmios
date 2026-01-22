// test.js - Comprehensive test file for ESLint rules

import React, { useState, createContext, useContext } from "react";
import { useEffect } from "react"; // Duplicate import
import { Link } from "next/link"; // Incorrect import path for Next.js links
import styles from "./nonexistent.module.css"; // Unused import

// No-labels rule trigger
loop1: for (let i = 0; i < 5; i++) {
  break loop1; // Unused label
}

// Multi-line string (no-multi-str)
const multiLineString =
  "This is a \
multi-line string";

// No-proto rule trigger
const proto = {}.__proto__;

// No-new rule trigger
new Function("return this");

// No-octal-escape rule trigger (using hex escape instead)
const octalEscape = "Copyright \xA9";

// Yoda condition
if (42 === count) {
  // Do something
}

function TestComponent() {
  const [count, setCount] = useState(0);
  const self = this; // Consistent-this rule

  // Unused variable
  const unusedVar = "I am not used";

  // Function without explicit return type
  const increment = () => {
    setCount(count + 1);
  };

  // Non-null assertion
  const handleClick = () => {
    const element = document.getElementById("nonexistent")?.innerText;
    console.log(element); // This will log null if the element doesn't exist
  };

  // Incorrect equality check
  if (count == null) {
    console.log("Count is null or undefined");
  }

  // Unused expression
  count && console.log("Count is truthy");

  // No-useless-concat rule trigger
  const uselessConcat = "a" + "b";

  // No-useless-return rule trigger
  const uselessReturn = () => {
    return;
  };

  // No-useless-computed-key rule trigger
  const obj = {
    ["key"]: "value",
  };

  // Prefer-destructuring rule trigger
  const array = [1, 2, 3];
  const first = array[0];

  // No-template-curly-in-string rule trigger
  const template = "Hello ${name}";

  // No-eval rule trigger
  eval('console.log("Hello")');

  // No-alert rule trigger
  alert("This is an alert");

  // no-await-in-loop rule trigger
  async function processItems(items) {
    for (const item of items) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  // no-promise-executor-return rule trigger
  new Promise((resolve) => {
    return resolve("done");
  });

  // require-atomic-updates rule trigger
  let counter = 0;
  async function increment() {
    counter = counter + 1;
  }

  // no-implicit-coercion rule trigger
  const bool = !!count;
  const num = +"123";

  // no-new-wrappers rule trigger
  const strWrapper = new String("test");
  const numWrapper = new Number(42);

  // no-throw-literal rule trigger
  function throwError() {
    throw "error";
  }

  // prefer-promise-reject-errors rule trigger
  Promise.reject("error");

  // JSX props not sorted
  return (
    <div className="container" id="main" role="main">
      <h1>Test Component</h1>
      <button onClick={increment}>Increment</button>
      <Link href="/about">About</Link>

      {/* React/no-danger rule trigger */}
      <div dangerouslySetInnerHTML={{ __html: "<p>Dangerous HTML</p>" }} />

      {/* React/jsx-boolean-value rule trigger */}
      <input disabled={true} />

      {/* React/jsx-no-useless-fragment rule trigger */}
      <>
        <span>Useless Fragment</span>
      </>

      {/* React/void-dom-elements-no-children rule trigger */}
      <img>This should not have children</img>

      {/* JSX-a11y/img-redundant-alt rule trigger */}
      <img src="image.jpg" alt="image of something" />

      {/* JSX-a11y/no-autofocus rule trigger */}
      <input autoFocus />

      {/* react/jsx-no-constructed-context-values rule trigger */}
      <ContextProvider />
    </div>
  );
}

// react/jsx-no-constructed-context-values test
const TestContext = createContext({ value: "" });

function ContextProvider() {
  return (
    <TestContext.Provider value={{ value: "test" }}>
      {/* Error: constructed context value */}
      <ContextConsumer />
    </TestContext.Provider>
  );
}

function ContextConsumer() {
  const context = useContext(TestContext);
  return <div>{context.value}</div>;
}

// react/no-object-type-as-default-prop test
function ComponentWithDefault({ config = { key: "value" } }) {
  // Error: object type as default prop
  return <div>{config.key}</div>;
}

// Class with no-useless-constructor
class TestClass {
  constructor() {
    // Empty constructor
  }

  // No-this-before-super rule trigger
  static childClass = class extends TestClass {
    constructor() {
      this.prop = "value";
      super();
    }
  };
}

// Additional test cases for general JavaScript rules

// prefer-nullish-coalescing pattern (will be caught by TypeScript rule in TS files)
const nullValue = null;
const defaultValue = nullValue || "default";

// prefer-optional-chain pattern (will be caught by TypeScript rule in TS files)
const nestedObj = { nested: { value: "test" } };
const nestedValue = nestedObj && nestedObj.nested && nestedObj.nested.value;

// No default export
export { TestComponent, TestClass, ContextProvider, ComponentWithDefault };
