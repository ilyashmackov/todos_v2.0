import React, { Component } from "react";
import TaskAddingForm from "../taskAddingForm/taskAddingForm";
import ItemList from "../itemList/itemList";
import SaveButton from "../saveButton/saveButton";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AppComponent = styled.div`
  width: auto;
  max-width: 600px;
  height: auto;
  background-color: #fff;
  margin: 50px auto 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        { label: "Ваша первая задача", completed: false, id: uuidv4() },
        { label: "Ваша вторая задача", completed: false, id: uuidv4() },
        { label: "Ваша третья задача", completed: false, id: uuidv4() },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  getData() {
    const newArray: any = [
      {
        label: "Ваша первая задача",
        completed: false,
        id: uuidv4(),
      },
    ];
    const data = JSON.parse(localStorage.getItem("dataArray") || newArray);
    if (data.length === 0) return { data: newArray };
    return {
      data,
    };
  }

  deleteItem(id: any) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }

  completeTask(id: any) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);
      data[index].completed = !data[index].completed;

      //const currentUser = JSON.parse(localStorage.getItem('currentUser') || [{}]]);
    });
  }

  addItem(body: any) {
    if (body) {
      const newItem = {
        label: body,
        completed: false,
        id: uuidv4(),
      };
      this.setState(({ data }: any) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    }
  }

  saveData() {
    this.setState(({ data }: any) => {
      console.log(data);
      localStorage.setItem("dataArray", JSON.stringify(data));
    });
  }

  render() {
    return (
      <AppComponent>
        <TaskAddingForm onAdd={this.addItem} />
        <ItemList
          items={this.state.data}
          onComplete={this.completeTask}
          onDelete={this.deleteItem}
        />
        <SaveButton onSave={this.saveData} />
      </AppComponent>
    );
  }
}
