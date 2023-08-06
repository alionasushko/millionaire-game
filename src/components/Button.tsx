import Spinner from './Spinner'

type OnClickType = (e: React.MouseEvent<HTMLElement>) => void

interface ButtonProps {
  loading?: boolean
  disabled?: boolean
  children: JSX.Element | string
  className?: string
  onClick?: OnClickType
}

const Button = ({
  loading = false,
  disabled = false,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export default Button
