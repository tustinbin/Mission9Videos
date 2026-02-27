import './App.css'

const bandNames = [
    {name: "Pond", members: "nick albrook, shiny joe ryan, jay gum watson, james ireland, jamie terry", formed: 2010},
    {name: "Koi Child", members: "cruz patterson, jazz artists", formed: 2017},
    {name: "Psychedelic Porn Crumpets", members: "jack something, other australians", formed: 2016},
    {name: "cocteau twins", members: "irish chick and two irish dudes", formed: 1985}
  ];

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>
}

function Band({name, members, formed}:{name: string; members: string; formed: number;}){
  return (
    <>

      <h2>{name}</h2>
      <h3>Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList(){
  

  return (
    <>
      {
        bandNames.map((singleBand) => (
          <Band {...singleBand}/>
        ))
      }
    </>

  )
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
}

export default App
