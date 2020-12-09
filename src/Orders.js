import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue([]);
  useEffect(() => {
    if (user) {
      db.collection("users") //access the user from database
        .doc(user?.uid) // ^
        .collection("orders") // ^
        .orderBy("created", "desc") // sort by the creation date
        .onSnapshot((
          snapshot // grab a realtime snapshot of the database
        ) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              // iterate through all orders and map them to an array
              id: doc.id,
              data: doc.data(), // all data from that order (basket, amount, etc)
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders: </h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
