# Scheduled Automation

The automation scheduler is now installed by migration `20260927190000_enable_scheduled_content_automation.sql`.

- Runs daily at 21:05 UTC / 00:05 East Africa Time.
- Runs only when `content_automation_settings.enabled` is true.
- Enabling automation and saving starts the first batch immediately; it does not wait for the next scheduled run.
- A second run is skipped while a recent run is still active, preventing duplicate daily batches.
