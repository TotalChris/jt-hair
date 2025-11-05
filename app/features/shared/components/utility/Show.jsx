export const Show = ({ when, children, else: elseShow = null }) => {
    return when ? children : elseShow;
}