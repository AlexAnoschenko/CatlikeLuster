import './styles.css';

export const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
