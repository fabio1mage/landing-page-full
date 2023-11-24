const Loading = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0" width="100%" height="100%"
            viewBox="0 0 128 128"><rect
                x="0" y="0" width="50%" height="50%"
                fill="transparent" /><g><circle fill="#FFFFFF"
                    cx="64.125" cy="64.125" r="12.031" /><animate
                    attributeName="opacity" dur="900ms"
                    begin="0s" repeatCount="indefinite"
                    keyTimes="0;0.5;1" values="0;1;0" /></g><g><path
                    fill="#FFFFFF" fillRule="evenodd"
                    d="M64,0A64,64,0,1,1,0,64,64,64,0,0,1,64,0Zm0,19.538A44.462,44.462,0,1,1,19.538,64,44.462,44.462,0,0,1,64,19.538Z" /><animate
                    attributeName="opacity" dur="900ms"
                    begin="0s" repeatCount="indefinite"
                    keyTimes="0;0.5;1" values="1;0;1" /></g></svg>
    )
}

export default Loading;