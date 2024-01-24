import "./Container.scss"

const Container = ({ title, subtitle, children }) => {
    return (
        <div className="container">
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {children}
        </div>
    );
};

export default Container;
