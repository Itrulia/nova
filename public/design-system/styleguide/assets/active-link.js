$(function () {
    const current = location.pathname;

    $(".c-fractal-navigation__item").each(function () {
        const $this = $(this);

        if ($this.attr("href") === current) {
            $this.addClass("c-fractal-navigation__item--active");
        }
    })
})