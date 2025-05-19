const { test, expect } = require('@playwright/test');

test.describe('Tour Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://sdet.solutechlabs.com/');
  });

  test('Book tour as guest', async ({ page }) => {
    // Select tour
    await page.click('text="Paris City Tour"');
    
    // Fill guest details
    await page.fill('#guestName', 'John Doe');
    await page.fill('#guestEmail', 'john@example.com');
    await page.click('#confirmBooking');
    
    // Verify ticket
    const bookingRef = await page.waitForSelector('.booking-reference');
    await expect(bookingRef).toBeVisible();
  });

  test('Create new tour as admin', async ({ page }) => {
    // Admin login
    await page.goto('https://sdet.solutechlabs.com/admin/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.click('#loginBtn');
    
    // Create tour
    await page.goto('https://sdet.solutechlabs.com/admin/tours/new');
    await page.fill('#tourName', 'Alaska Cruise');
    await page.fill('#destination', 'Alaska');
    await page.fill('#slots', '50');
    await page.fill('#price', '3500');
    await page.fill('#description', '7-night glacier cruise');
    await page.click('#saveTour');
    
    // Verify creation
    await page.goto('https://sdet.solutechlabs.com/admin/tours');
    const newTour = await page.waitForSelector('text="Alaska Cruise"');
    await expect(newTour).toBeVisible();
  });

  test('View all bookings', async ({ page }) => {
    // Admin login
    await page.goto('https://sdet.solutechlabs.com/admin/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.click('#loginBtn');
    
    // View bookings
    await page.goto('https://sdet.solutechlabs.com/admin/bookings');
    const bookings = await page.$$('.booking-item');
    await expect(bookings.length).toBeGreaterThan(0);
  });

  test('View all tickets', async ({ page }) => {
    // Admin login
    await page.goto('https://sdet.solutechlabs.com/admin/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.click('#loginBtn');
    
    // View tickets
    await page.goto('https://sdet.solutechlabs.com/admin/tickets');
    const tickets = await page.$$('.ticket-item');
    await expect(tickets.length).toBeGreaterThan(0);
  });
});