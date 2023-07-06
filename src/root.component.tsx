import './styles.css'

export default function Root(props) {
  return <section className='background-gaia'>
    <h1>{props.name} is mounted!</h1>
    <h2>This application allows you to view the application project Gaia.</h2>
  </section>;
}