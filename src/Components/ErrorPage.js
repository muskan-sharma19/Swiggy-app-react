import React from 'react'
import { useRouteError } from 'react-router';
const ErrorPage = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <>
    <div>Oops something went wrong..</div>
    <div>{err.status}{" "}{err.statusText}</div>
    </>
  )
}

export default ErrorPage;