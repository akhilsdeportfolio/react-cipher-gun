import logo from './logo.svg';
import React from 'react';
import { Button, Checkbox, Input, Select, Switch } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-4xl">THIS IS HEADING</h1>
      </div>
      <div>
        <Switch />
      </div>
      <div>
        <Checkbox />
      </div>
      <div>
        <Input placeholder="Enter name" />
      </div>
      <div>
        <Select>
          <Select.Option>Sample</Select.Option>
          <Select.Option>Sample</Select.Option>
        </Select>
      </div>
    </div>
  );
}

export default App;
