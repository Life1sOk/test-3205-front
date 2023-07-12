import { useState } from "react";

import spinner from "../assets/spinner.svg";

import Form from "../components/form/form";
import Users from "../components/users/users";

import { fetchHelper } from "../helpers/fetch";
import { DataType } from "../types/data";

import { AppStyle } from "./app.style";

// Создаем хашмап для сохранения функции "abortHandler" js:28;
const hash = new Map();

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findUserHandler = async (sendData: DataType) => {
    // Определяем аборт-контролер для каждого сабмита
    const controller = new AbortController();

    // Функция аборт
    const abortHandler = function () {
      controller.abort();
    };

    // Если свойство "abort" существует в хашмапе - это значит, что сейчас идет предыдущий запрос на сервер. Достаем сохраненную функцию "abortHandler" (js: 32) и вызываем (js: 33), таким образом она отменяет предыдущий(свой) запрос. И так-как мы будет запускать еще один запрос, нам нужно перезаписать нашу функцию "abortHandler";
    // Если нет - записываем функцию "abortHandler";
    if (hash.has("abort")) {
      const prevRequestAbort = hash.get("abort");
      prevRequestAbort();
      hash.set("abort", abortHandler);
    } else {
      hash.set("abort", abortHandler);
    }

    // Подготовка данных и спиннер
    // const sendData: DataType = { email: email.toString(), number: Number(number) };
    setIsLoading(true);

    try {
      // Запрос на сервер
      const data = await fetchHelper({ sendData, controller });

      // При успешном запросе обновляем данные, убираем спиннер и чистим хашмап;
      setData(data);
      setIsLoading(false);
      hash.delete("abort");
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  return (
    <AppStyle>
      <Form findUserHandler={findUserHandler} />

      {isLoading ? <img src={spinner} alt="spinner" /> : <Users data={data} />}
    </AppStyle>
  );
}

export default App;
