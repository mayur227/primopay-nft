import { notification } from 'antd';

function customStylesDataTable() {
    const customStyles = {
        headCells: {
            style: {
                '&:last-child': {
                    justifyContent: "center"
                },
            },
        },
        cells: {
            style: {
                '&:first-child': {
                    justifyContent: "center"
                },
                '&:last-child': {
                    justifyContent: "center"
                },
            },
        }
    }
    return customStyles;
}
function isLoginResponse(navigate) {
    const isLogin = localStorage.getItem("access_token") || false;
    if (isLogin === null) {
        navigate('/admin/login');
    }
    if (isLogin === false) {
        navigate('/admin/login');
    }
}
function insertAfter(referenceNode, newNode) {
    let parentthis =  referenceNode.closest(".form-group");
    // referenceNode.parentNode.closest(".form-control").classList.add("is-invalid");
    // parentthis.insertBefore(newNode, referenceNode.nextSibling);
    // parentthis.insertBefore(newNode, parentthis.nextSibling);
    parentthis.insertBefore(newNode, referenceNode.parentNode.nextSibling);
}

function isErrorMessage(name, message) {
    var el = document.createElement("span");
    el.classList.add("error-message");
    el.innerHTML = humanize(name) + ' ' + message;

    // var div = document.getElementById(name);
    var elemattr = document.querySelectorAll('[data-name='+name+']');
    elemattr.forEach(function(parentdiv){
        if (parentdiv) {
            // var removediv = parentdiv.closest('.form-group').querySelectorAll("error-message");
            // console.log(removediv);

            //parentdiv.closest('.form-group').removeChild(removediv);
            
            // if (parentdiv.closest('.form-group').nextSibling != null) {
            //     console.log('in');
            //     parentdiv.closest('.form-group').nextSibling.remove()
            // }
            if(parentdiv.closest('.form-group')){
                // div.closest(".form-control").classList.add("is-invalid");
                parentdiv.closest('.form-group').classList.add("is-invalid");
            }
            insertAfter(parentdiv, el);
        }
    });
}
function humanize(str) {
    var i, frags = str.split('_');
    for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}
function isError(error) {
    var errors_entries = Object.entries(error);
    if (errors_entries) {
        var allDivsCollections = document.getElementsByClassName('error-message');
        var arr = Array.from(allDivsCollections);
        arr.forEach((singleElement) => {
            // singleElement.previousSibling.classList.remove("is-invalid");
            singleElement.parentNode.closest('.form-group').classList.remove("is-invalid");
            singleElement.remove();
        })
        errors_entries.forEach((errorAll) => {
            let type = errorAll[1].type;
            // let name = errorAll[1].ref.name;
            let name = errorAll[0];

            let message = '';
            if (type === 'required') {
                message = 'is required.';
                isErrorMessage(name, message);
            }
            // else if (type === 'minLength') {
            //     message =  errorAll[1].message;
            //     isErrorMessage(name, message);
            // } else if (type === 'maxLength') {
            //     message = 'Max length exceeded';
            //     isErrorMessage(name, message);
            // } else if (type === 'validate') {
            //     message = errorAll[1].message;
            //     isErrorMessage(name, message);
            // } else if (type === 'min') {
            //     message = 'min number is 0';
            //     isErrorMessage(name, message);
            // } else if (type === 'max') {
            //     message = 'max number is 100';
            //     isErrorMessage(name, message);
            // } else if (type === 'validate') {
            //     message = errorAll[1].message;
            //     isErrorMessage(name, message);

            // } else if (type === 'pattern') {
            //     message = errorAll[1].message;
            //     isErrorMessage(name, message);

            // }
            else {
                message = errorAll[1].message;
                isErrorMessage(name, message);
            }
        });
    }

}
function configHeaderAxios() {
    const config = {
        headers: {
            'content-type': 'application/json',
            'authorization': localStorage.getItem('customer_access_token')
        }
    }
    return config;
}
function errorResponse(error) {

    if (error.response.status === 422) {
        let errorData = error.response.data;
        if (errorData) {
            var errors = Object.values(errorData);
            if (errors) {
                errors.forEach((err) => {
                    notification.open({
                        message: 'Error',
                        description: err,
                    });
                });
            }
        }
    }
    if (error.response.status === 401) {
        let errorData = error.response.data.Unauthorized;
        localStorage.removeItem('access_token');
        localStorage.removeItem('admin_profile');
        notification.open({
            message: 'Error',
            description: errorData,
        });

        window.location.reload();
    }
    if (error.response.data.message) {
        // notification.open({
        //     message: 'Error',
        //     description: error.response.data.message,
        // });

    }
}

function successResponse(response) {
    if (response.status === 200) {
        if (response.data.message) {
            notification.open({
                message: 'Success',
                description: response.data.message,
            });
        }
    }
}
// function HasRole(response) {
//     if (response.status === 200) {
//         if (response.data.message) {
//             toast.success(response.data.message);
//         }
//     }
// }

export { errorResponse, successResponse, isLoginResponse, configHeaderAxios, isError, customStylesDataTable };