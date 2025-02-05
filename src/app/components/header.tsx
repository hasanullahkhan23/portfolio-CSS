export default function Header(){
    return(
        <header className="header">
          <div>
            <h1 className="hdiv1">My Portfolio</h1>
          </div>
          <div>
            <ul className="hdiv2">
            <a className="hlink" href="/">Home</a>
            <a className="hlink" href="/about">About</a>
            <a className="hlink" href="/contact">Contact me</a>
            </ul>
          </div>
        </header>
    )
}