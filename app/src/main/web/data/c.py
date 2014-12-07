import csvkit
import ujson

csvfile = open('hkthonopstat.csv', 'rt')
jsonfile = open('file.json', 'w')

fieldnames = ("auditid","Temperature","Humidity","PowerStatus","BatteryVoltage","WifiConnectionQuality","OperatingMode","WorkingHeatSetpoint","WorkingCoolSetpoint","SystemStatus","Id","Updated")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')