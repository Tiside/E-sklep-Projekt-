export default function UserUi() {
    function DisplayUserUi(): void {
        const userPfp = document.querySelector('.user-pfp') as HTMLElement | null;
        const login = document.querySelector('.bx-log-in') as HTMLElement | null;
        const logout = document.querySelector('.bx-help-circle') as HTMLElement | null;
        const settings = document.querySelector('.bx-cog') as HTMLElement | null;

        if (!userPfp || !login || !logout) return;

        userPfp.classList.toggle('active');

        const isVisible = login.classList.contains('show') && logout.classList.contains('show');

        if (isVisible) {
            login.classList.remove('show');
            logout.classList.remove('show');
        } else {
            login.classList.add('show');
            logout.classList.add('show');
        }
    }
}