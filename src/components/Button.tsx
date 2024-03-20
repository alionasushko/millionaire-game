import Spinner from './Spinner'

type OnClickType = (e: React.MouseEvent<HTMLElement>) => void

interface ButtonProps {
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode | string
  className?: string
  onClick?: OnClickType
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  children,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export default Button
