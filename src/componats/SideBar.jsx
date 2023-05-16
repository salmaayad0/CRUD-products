import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <>
    <ul>
        <li>
            <Link to={"/Products"}>All Porducts</Link>
        </li>

        <li>
            <Link to={"/Products/Add"}>Add Porduct</Link>
        </li>
    </ul>
    </>
  )
}
