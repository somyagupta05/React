function Hello()
{
  let myName='somya';
  let number=456;
  let fullName=()=>{
    return 'somya gupta';
  }
  return <h3>
    Hello this is {myName} speaking. I am your master {fullName()}. And  Number is {number}
  </h3>
}
export default  Hello;