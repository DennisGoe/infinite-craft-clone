import React, {MouseEventHandler} from "react";

interface IconProps {
    icon: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}

const Icon = React.forwardRef(({
                                   icon,
                                   className,
                                   onClick
                               }: IconProps, ref: React.ForwardedRef<HTMLSpanElement>): JSX.Element => {
    const mergedClasses = [
        className,
        (onClick) && "cursor-pointer",
        "material-symbols-outlined select-none"
    ].filter(Boolean).join(" ");

    return (
        <span ref={ref}
              onClick={onClick}
              className={mergedClasses}
              translate="no"
              dangerouslySetInnerHTML={{__html: icon}}/>
    );
});

export default Icon;
