function AutoResize({textareaRef,...props}){
    const textareaRef = useRef(null);

    const resizeTextarea = () => {
      const textarea = {textareaRef}.current;
      textarea.style.height = "auto"; // Reset the height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    };

    useEffect(() => {
      resizeTextarea(); // Initial resize on component mount
    }, []);

    const handleInput = () => {
      resizeTextarea();
    };
}
export default AutoResize;