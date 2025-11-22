const Util = (
    function () 
        {

            return {
                displayErrorMessage(
                    errorMessage,
                    callbackFn,
                    fullWidth = false,
                    subMessage,
                    legacyStyle = false
                    ){
                        Util.fireEvent('showalert' , {
                            detail : {
                                message:errorMessage,
                                subMessage,
                                callbackFn: callbackFn,
                                fullWidth,
                                legacyStyle,
                                type:'error',
                            }
                        }

                        )
                    },
                    fireEvent(eventName, detail){
                        document.dispatchEvent(new CustomEvent(eventName, detail))
                    }
            }

    }
)()

export default Util