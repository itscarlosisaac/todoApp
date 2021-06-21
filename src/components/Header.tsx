import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="flex justify-center p-8 shadow-sm bg-white items-center">
      <div className="m-0 justify-start flex-shrink">
        <Logo />
      </div>
    </header>
  )
}
