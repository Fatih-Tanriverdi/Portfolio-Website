import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import $ from 'jquery';

const ScrollButton = () => {
    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(() => {
                if ($(window).scrollTop() > 20) {
                    $('#scrollBtn').fadeIn();
                } else {
                    $('#scrollBtn').fadeOut();
                }

                if ($(window).scrollTop() === 0) {
                    $('#scrollBtn').fadeOut();
                }
            });

            $('#scrollBtn').click(() => {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    800
                );
                return false;
            });
        });
    }, []);

    return (
        <button id="scrollBtn" style={{ display: 'none' }}>
            <FaArrowUp />
        </button>
    );
};

export default ScrollButton;
