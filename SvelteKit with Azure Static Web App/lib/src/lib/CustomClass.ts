export default class CustomClass{
    public static htmlToText(html: string): string | null {
        var temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent;
    }
}