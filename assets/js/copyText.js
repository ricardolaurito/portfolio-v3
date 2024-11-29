document.addEventListener('DOMContentLoaded', () => {
    const copyItems = document.querySelectorAll('.copy-item');
    const toast = document.getElementById('toast');
    let timeoutId;
    
    copyItems.forEach(item => {
        item.addEventListener('click', async () => {
            const textToCopy = item.getAttribute('data-copytext');
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Clear any existing timeout
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    toast.classList.remove('active');
                    // Small delay to ensure animation resets
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                
                // Show toast notification
                toast.classList.add('active');
                
                // Remove toast after animation
                timeoutId = setTimeout(() => {
                    toast.classList.remove('active');
                }, 3000);
                
            } catch (err) {
                console.error('Failed to copy text:', err);
            }
        });
    });
});
